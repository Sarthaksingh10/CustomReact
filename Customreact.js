/* function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
} */ //We have made this code by using some repetitive syntaxes we can make it using loop

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}          //This is the render function which we made in the file to understand how does rendering works in React

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};   //Creating a custom object to understand how does react read the files.

const maincontainer = document.querySelector("#root");
customRender(reactElement, maincontainer);
