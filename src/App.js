import { TextArea, Header } from "./component/index";

function App() {
  return (
    //createTweetが最初に表示 ->　createTweet Buttonが押されるとtweetImageが表示される
    <div className="w-screen h-screen flex justify-center">
      <div>
        <Header />
        <div>
          <TextArea />
        </div>
      </div>
    </div>
  );
}

export default App;
