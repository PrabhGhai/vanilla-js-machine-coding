const data = [
  {
    title: "Accordion Item 1",
    content: "This is the content for item 1.",
  },
  {
    title: "Accordion Item 2",
    content: "This is the content for item 2.",
  },
  {
    title: "Accordion Item 3",
    content: "This is the content for item 3.",
  },
  {
    title: "Accordion Item 4",
    content: "This is the content for item 4.",
  },
];

let accordion = document.querySelector("#accordion");

let fetchData = () => {
  data.forEach((item, i) => {
    let Maindiv = document.createElement("div");
    Maindiv.classList.add("main-acc-card");
    let AccHeader = document.createElement("div");
    AccHeader.classList.add("accordion-header");

    let AccDesc = document.createElement("div");

    let heading = document.createElement("h4");
    heading.innerHTML = item.title;

    let button = document.createElement("button");
    button.innerHTML = "Show";
    button.classList.add("btn");
    button.addEventListener("click", () => {
      AccDesc.classList.toggle("desc-hide");
    });

    AccHeader.appendChild(heading);
    AccHeader.appendChild(button);

    AccDesc.classList.add("accordion-desc", "desc-hide");
    let para = document.createElement("p");
    para.innerHTML = item.content;

    AccDesc.append(para);

    Maindiv.append(AccHeader, AccDesc);
    accordion.appendChild(Maindiv);
  });
};
