import Item from "..";

const accordionData = [
  {
    title: "What is an accordion?",
    content: "An accordion is a UI component that allows users to expand and collapse sections of content.",
  },
  {
    title: "How does it work?",
    content: "Each section typically has a title that can be clicked to toggle the visibility of its content.",
  },
  {
    title: "Why use an accordion?",
    content: "Accordions help organize content in a compact space and improve the user experience by showing only what’s needed.",
  },
  {
    title: "Can I style the accordion?",
    content: "Yes, you can style the accordion with CSS or a library of your choice to fit your design needs.",
  },
  {
    title: "What are some use cases?",
    content: "FAQs, product details, and step-by-step instructions are common use cases for accordions.",
  },
];



const Accordian = () => {
  return (
    <div>
        <h1>Accordian</h1>
        <ul >
            {accordionData.map((i)=>
            <Item data={i} key={Math.random()}
            />)}
        </ul>
    </div>
  )
}

export default Accordian