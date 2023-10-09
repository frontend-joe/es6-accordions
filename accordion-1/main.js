const toggleItem = (element) => {
  const headers = document.querySelectorAll("article header");
  for (let header of headers) {
    header.classList.remove("active");
    header.nextElementSibling.style.height = "0px";
  }

  element.classList.add("active");

  const content = element.nextElementSibling;

  const text = content.querySelector("p");

  content.style.height = `${text.clientHeight}px`;
};
