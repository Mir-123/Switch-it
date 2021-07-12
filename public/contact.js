// feedback form
const feedForm = document.querySelector('#feed-form');
feedForm.addEventListener('submit', (e) => {
e.preventDefault();

var timestamp=JSON.stringify(Date.now());
db.collection('feedback').add({
  name: feedForm['feedname'].value,
  email: feedForm['feedemail'].value,
  message: feedForm['feedmsg'].value,
  timestamp:timestamp,
 }).then(() => {
    location.reload();
  feedForm.reset();
}).catch(err => {
  console.log(err.message);
});
});