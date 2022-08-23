import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import TestClassOOP from "./TestClassOOP";
import Header from "./Header/Header";
import Goods from "./Goods";

const headerData = {
  site_name: "My test site name",
  nav: [
    { link: "nav1", text: "my link" },
    { link: "nav2", text: "my link 2" },
    { link: "nav3", text: "my link 3" },
  ],
};

const goods = [
  {
    title: "apple",
    cost: 330,
    image: "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-512.png",
  },
  {
    title: "pear",
    cost: 587,
    image: "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png",
  },
];

function App() {
  return (
    <>
      <Test></Test>
      <TestClassOOP></TestClassOOP>
      {/* <Header sitename="About React" /> */}
      <Header data={headerData} />
      {/* vienkartinis iskvietimas */}
      <Goods
        title={goods[0].title}
        cost={goods[0].cost}
        image={goods[0].image}
      />
      {goods.map((item) => (
        <Goods title={item.title} cost={item.cost} image={item.image} />
      ))}
    </>
  );
}

export default App;
