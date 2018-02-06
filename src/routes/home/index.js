import { h } from 'preact';
import styled from 'styled-components';
import getDay from 'date-fns/get_day';

const Container = styled.main`
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  position: relative;
  width: 800px;
  max-width: 80%;
  font-size: 30px;
  text-align: center;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Is = styled.span`
  position: relative;

  &:before, &:after {
    content: "\f005";
    font-family: FontAwesome;
    position: relative;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    font-size: 16px;
    margin: -0 30px;
    top: -5px;
  }
`;

const Xmas = styled.span`
  font-family: 'Changa One', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 90px;
  letter-spacing: 15px;
  margin: 0 0;

  @media(max-width: 700px) {
     font-size: 70px;
  }

    @media(max-width: 530px) {
     font-size: 50px;
       letter-spacing: 10px;
  }
`;

const Tuesday = styled.span`
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  margin: 70px 0 0;
  position: relative;
  letter-spacing: 6px;

  &:before, &:after {
    content: " ";
    position: absolute;
    width: 50px;
    height: 5px;
    border-top: 1px solid #222222;
    border-bottom: 1px solid #222222;
  }
  &:before {
    margin: 7px 0 0 -60px;
  }
  &:after {
    margin: 7px 0 0 10px;
  }
`;
const date = new Date();
const year = date.getFullYear();
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Day = new Date(year, 11, 25);

const Home = () => (
	<Container>
		<Is>Is</Is>
		<Xmas>Christmas on a Friday 13th?</Xmas>
		<Tuesday>No, It's a fucking {Days[getDay(Day)]}</Tuesday>
	</Container>
);


export default Home;
