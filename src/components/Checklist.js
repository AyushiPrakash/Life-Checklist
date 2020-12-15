import { useState } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  icon: {
    borderRadius: "0.25rem",
    border: "1px solid #ddd",
    width: 24,
    height: 24,
    backgroundColor: "white",
  },

  checkedIcon: {
    backgroundColor: "white",
    "&:before": {
      display: "block",
      width: 22,
      height: 22,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%230BDA51'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
});

const Page = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  background-color: rgb(238, 227, 227);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.5rem;
  padding: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 22px;
  padding: 1.25rem 1rem;
  background-color: ${(props) => (props.isChecked ? "#0bda51" : "white")};
  color: ${(props) => (props.isChecked ? "white" : "rgb(51, 51, 51)")};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .text {
    font-size: 16pt;
    font-weight: 500;
  }
`;

const list = [
  { text: "👶🏻 Be born", checked: false },
  { text: "Take first steps", checked: false },
  { text: "Say first words", checked: false },
  { text: "Learn to read", checked: false },
  { text: "Make a friend", checked: false },
  { text: "Learn to ride a bike", checked: false },
  { text: "Read a book", checked: false },
  { text: "Learn to swim", checked: false },
  { text: "Finish elementary school", checked: false },
  { text: "Play a sport", checked: false },
  { text: "Fly in a plane", checked: false },
  { text: "Ride a boat", checked: false },
  { text: "Ride in a train", checked: false },
  { text: "Ride a helicopter", checked: false },
  { text: "See the ocean", checked: false },
  { text: "See snow", checked: false },
  { text: "Make a snowman", checked: false },
  { text: "Finish middle school", checked: false },
  { text: "Go to a concert", checked: false },
  { text: "Go camping", checked: false },
  { text: "Ride a rollercoaster", checked: false },
  { text: "Play an instrument", checked: false },
  { text: "Get kissed", checked: false },
  { text: "Get a credit card", checked: false },
  { text: "Start driving", checked: false },
  { text: "Go on a roadtrip", checked: false },
  { text: "Visit another country", checked: false },
  { text: "Give a speech", checked: false },
  { text: "Graduate high school", checked: false },
  { text: "Learn another language", checked: false },
  { text: "Invest some money", checked: false },
  { text: "Meet an idol", checked: false },
  { text: "Make a terrible mistake", checked: false },
  { text: "Win a trophy", checked: false },
  { text: "Climb a mountain", checked: false },
  { text: "Run a marathon", checked: false },
  { text: "Learn to cook", checked: false },
  { text: "Explore a cave", checked: false },
  { text: "See a volcano", checked: false },
  { text: "Graduate college", checked: false },
  { text: "Have a long relationship", checked: false },
  { text: "Get dumped", checked: false },
  { text: "Sign a contract", checked: false },
  { text: "Get a job", checked: false },
  { text: "Get promoted", checked: false },
  { text: "Get a paycheck", checked: false },
  { text: "Get fired", checked: false },
  { text: "Get in the news", checked: false },
  { text: "Vote in an election", checked: false },
  { text: "Switch careers", checked: false },
  { text: "Buy a house", checked: false },
  { text: "Get engaged", checked: false },
  { text: "Get married", checked: false },
  { text: "Have a kid", checked: false },
  { text: "Teach your kid to walk", checked: false },
  { text: "Teach your kid to talk", checked: false },
  { text: "Watch your kid graduate", checked: false },
  { text: "Watch your kid get married", checked: false },
  { text: "Become a grandparent", checked: false },
  { text: "Retire", checked: false },
  { text: "Tell your grandkid a story", checked: false },
  { text: "See a solar eclipse", checked: false },
  { text: "Plant a garden", checked: false },
  { text: "Travel the world", checked: false },
  { text: "Turn 100", checked: false },
  { text: "Complete Life Checklist", checked: false },
];

const CheckList = () => {
  const classes = useStyles();
  const [checkList, setCheckList] = useState(list);

  const handleClick = (index) => {
    setCheckList((oldState) => {
      const newList = oldState.slice();
      newList[index] = {
        text: newList[index].text,
        checked: !newList[index].checked,
      };
      return newList;
    });
  };

  return (
    <>
      <Page>
        {checkList.map((item, index) => (
          <Card
            isChecked={item.checked}
            onClick={() => {
              handleClick(index); //calling a fn
            }}
          >
            <Checkbox
              className={classes.root}
              icon={<span className={classes.icon} />}
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              checked={item.checked}
              disableRipple
              disableFocusRipple
            />
            <label className="text">{item.text}</label>
          </Card>
        ))}
      </Page>
    </>
  );
};

export default CheckList;
