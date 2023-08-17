import phBook from 'images/phBook.png';
import { Title, Text, Image } from 'components/PageStyled/HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <Title>PHONEBOOK</Title>
      <Text>
        A quick and easy app that's always there.
        <br /> Add, edit and delete contacts from any device.
      </Text>
      <Image src={phBook} width="" alt="" />
    </div>
  );
};

export default HomePage;
