const searchInput = document.getElementById('search');
const idiomsList = document.getElementById('idioms-list');
const idiomItems = idiomsList.getElementsByClassName('idiom-item');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  for(let i = 0; i < idiomItems.length; i++) {
    const eng = idiomItems[i].getElementsByClassName('idiom-eng')[0].textContent.toLowerCase();
    const tr = idiomItems[i].getElementsByClassName('idiom-tr')[0].textContent.toLowerCase();

    if (eng.includes(filter) || tr.includes(filter)) {
      idiomItems[i].style.display = "";
    } else {
      idiomItems[i].style.display = "none";
    }
  }
});
