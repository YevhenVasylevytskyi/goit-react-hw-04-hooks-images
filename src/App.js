import React, { useState } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handlesearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <Container>
      <Searchbar searchPictures={handlesearchQuery} />
      <ImageGallery searchQuery={searchQuery} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
// export default class App extends Component {
//   state = {
//     searchQuery: '',
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   handlesearchQuery = searchQuery => {
//     this.setState({ searchQuery });
//     // console.log(searchQuery);
//   };

//   render() {
//     const { searchQuery } = this.state;
//     return (
//       <Container>
//         <Searchbar searchPictures={this.handlesearchQuery} />
//         <ImageGallery searchQuery={searchQuery} />

//         <ToastContainer
//           position="top-right"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </Container>
//     );
//   }
// }
