import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Annual = () => {
  
  const data = [
    {
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },{
      title: "ECE Orientation",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishtha",
      description:
        " Join us for an evening of artistic expression and creativity.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/440323056_17908104839953783_8745844986834733664_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RY82HdMN09IQ7kNvgGxmJsW&_nc_gid=67de5aba14ed48adb3137bf410660165&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1ODEzNjAzNDc1MDUyNTc0Ng%3D%3D.3-ccb7-5&oh=00_AYBCIzKWCHFqwkrhB1SjLnhdi2XHCt5F3JPeiyJpMfh-FA&oe=678D96F4&_nc_sid=fc8dfb",
    },
    
  ];

  return (
    <div className=" overflow-hidden">
      <div className="galImg flex justify-center items-center mb-[5vh]">
        <img
          src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736675717/Group_48096075_jdlhkt.png"
          alt="Gallery"
        />
      </div>

      <div className="w-full h-[80vh] mx-auto relative ">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            // Adjust for desktop view
            1024: {
              slidesPerView: 3, // 3 cards in view for desktop
              spaceBetween: 20,
            },
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-[90%]  p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg rounded-[20px]  border-blue-500"
              >
                <div
                  className="mx-0 mt-6 h-48 w-full px-4 bg-cover bg-center rounded-[20px]"
                  style={{
                    backgroundImage: url(item.image),
                    border: "2px solid #007bff",
                    boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff",
                  }}
                ></div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm mt-3 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Annual;