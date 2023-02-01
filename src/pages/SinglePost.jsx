import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom';
import { RiEditLine } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';


const SinglePost = () => {

  return (
    <div className='single'>
      <div className="content">
        <img src='https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
        <div className="user">
          <img src='https://image.3bmeteo.com/images/user_foto/w_800/485020200625101857169304.jpg' alt='' />
          <div className="info">
            <span>Cocci</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <RiEditLine className='edit-icon' style={{ backgroundColor: 'lightblue' }} />
            </Link>
            <RiDeleteBin2Line className='edit-icon' style={{ backgroundColor: 'salmon' }} />
          </div>
        </div>
        <div className="text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et.
            Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Cursus mattis molestie a iaculis at erat. Ultricies integer quis auctor elit sed vulputate mi sit.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et.
            Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Cursus mattis molestie a iaculis at erat. Ultricies integer quis auctor elit sed vulputate mi sit.
            Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Pharetra et ultrices neque ornare aenean euismod. Vitae auctor eu augue ut lectus arcu bibendum.
            Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Adipiscing enim eu turpis egestas. Integer quis auctor elit sed.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et.
            Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Cursus mattis molestie a iaculis at erat. Ultricies integer quis auctor elit sed vulputate mi sit.
            Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Pharetra et ultrices neque ornare aenean euismod. Vitae auctor eu augue ut lectus arcu bibendum.
            Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Adipiscing enim eu turpis egestas. Integer quis auctor elit sed.
            Enim diam vulputate ut pharetra sit. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Pellentesque habitant morbi tristique senectus et.
            Senectus et netus et malesuada fames. Auctor urna nunc id cursus metus aliquam. Volutpat odio facilisis mauris sit amet massa. Molestie ac feugiat sed lectus vestibulum.
            Neque vitae tempus quam pellentesque. Volutpat diam ut venenatis tellus in metus vulputate. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.
            Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et.
            Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Cursus mattis molestie a iaculis at erat. Ultricies integer quis auctor elit sed vulputate mi sit.
            Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Pharetra et ultrices neque ornare aenean euismod. Vitae auctor eu augue ut lectus arcu bibendum.
            Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Adipiscing enim eu turpis egestas. Integer quis auctor elit sed.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et.
            Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Cursus mattis molestie a iaculis at erat. Ultricies integer quis auctor elit sed vulputate mi sit.
          </p>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default SinglePost