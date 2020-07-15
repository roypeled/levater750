let button = document.querySelector("#copyButton");
button.addEventListener('click', copyText);

addOrgs();

function copyText() {
  let textarea = document.createElement('textarea');
  let quote = document.querySelector("blockquote");
  let name = document.querySelector("#name");
  let id = document.querySelector("#id");

  let fullText = quote.innerText;
  fullText = fullText
      .replace(/##name##/, name.value)
      .replace(/##id##/, id.value)
      .replace(/\r?\n|\r/g, '');

  textarea.value = fullText;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  button.classList.add('success');
  button.innerHTML = "הועתק, לחץ שוב כדי להעתיק"
}

function addOrgs() {
  let orgsList = document.querySelector("#orgs");
  orgs
    .sort(() => Math.random() - .5)
    .map(org => `<li><a href='${org.link}' target="_blank">${org.name}</li>`)
    .forEach(html => orgsList.innerHTML += html);
}


