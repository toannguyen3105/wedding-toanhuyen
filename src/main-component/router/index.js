import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2/HomePage2'
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import InvitationPage from '../InvitationPage/InvitationPage';
import AboutPage from '../AboutPage/AboutPage';
import WeddingPage from '../WeddingPage/WeddingPage';
import WeddingDetailsPage from '../WeddingDetailsPage/WeddingDetailsPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import GalleryPage2 from '../GalleryPage2/GalleryPage2';
import GallerySlide from '../GallerySlide/GallerySlide';
import RSVPPage from '../RSVPPage/RSVPPage';
import StoryPage from '../StoryPage/StoryPage'
import AccomodationPage from '../AccomodationPage/AccomodationPage'
import EventPage from '../EventPage/EventPage';
import BrideGroomPage from '../BrideGroomPage/BrideGroomPage';
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ErrorPage from '../ErrorPage'
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<HomePage3 />} />
          <Route path='home4' element={<HomePage4 />} />
          <Route path='home5' element={<HomePage5 />} />
          <Route path='home6' element={<HomePage6 />} />
          <Route path='home7' element={<HomePage7 />} />
          <Route path='invitation' element={<InvitationPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='wedding' element={<WeddingPage />} />
          <Route path='wedding-details' element={<WeddingDetailsPage />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path='gallery-s2' element={<GalleryPage2 />} />
          <Route path='gallery-slide' element={<GallerySlide />} />
          <Route path='rsvp' element={<RSVPPage />} />
          <Route path='story' element={<StoryPage />} />
          <Route path='accomodation' element={<AccomodationPage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='groom-bride' element={<BrideGroomPage />} />
          <Route path='coming' element={<ComingSoonPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='blog-single/:id' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
