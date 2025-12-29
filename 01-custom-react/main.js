const reactElement = {
  a: {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank", // Open link in a new tab
    },
    children: "Visit Google.com",
  },
  button: {
    type: "button",
    props: {
      onclick: "console.log('Button clicked!')",
    },
    children: "Click Me",
  },
};

const mainContainer = document.getElementById("root");

const customRender = (element, container) => {
  const { type, props, children } = element;

  const domElement = document.createElement(type);
  domElement.innerHTML = children;
  for (const [key, value] of Object.entries(props)) {
    domElement.setAttribute(key, value);
  }
  // domElement.href = href;
  // domElement.target = target;
  // domElement.textContent = children;

  console.log({ domElement });
  container.appendChild(domElement);
};

// console.log(document.getElementById("clickMe"));
customRender(reactElement["a"], mainContainer);
customRender(reactElement["button"], mainContainer);
