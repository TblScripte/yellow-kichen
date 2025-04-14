/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import logo from '../app/assets/Logo.png'
import person from '../app/assets/person.png'
import vector from '../app/assets/Vector.png'
import menuIcon from '../app/assets/ic-menu-navigation.png'
import photoPlate from '../app/assets/Photo-plate.png'
import timeEat from '../app/assets/time-eat.png'
import deliveryIcon from '../app/assets/delivery.png'
import parisIcon from '../app/assets/paris.png'
import first from '../app/assets/first.jpeg'
import second from '../app/assets/second.jpeg'
import third from '../app/assets/third.jpeg'
import forth from '../app/assets/forth.jpeg'
import group29 from '../app/assets/Group 29.png'
import un from '../app/assets/un.png'
import union from '../app/assets/Union.png'
import uni from '../app/assets/uni.png'
import loc from '../app/assets/loc.png'
import bagel from '../app/assets/bagel.png'
import comp9 from '../app/assets/Component 9.png'
import comp7 from '../app/assets/Component 7.png'
import comp8 from '../app/assets/Component 8.png'
import comp10 from '../app/assets/Component 10.png'
import yellowKitchenLogo from '../app/assets/yellowkitchen.png'
import group32 from '../app/assets/Group 32.png'
import group19 from '../app/assets/Group 19.png'
import Map from '../app/assets/Map.png'
import ImgInsta from "../app/assets/Rectangle 10.png"

const page = () => {
	return (
		<>
			<header className='w-full text-[black]'>
				<div className='w-full border-b-2 border-solid border-gray-300'>
					<nav className='w-[90%] m-auto flex justify-between py-5'>
						<Image src={logo} alt='logo' />
						<div className='flex gap-[50px]'>
							<div className='hidden sm:flex items-center gap-2'>
								<Image src={person} alt='person' />
								<span className='text-[#9093A6]'>Log in</span>
							</div>
							<div className='hidden sm:flex gap-2 items-center'>
								<Image src={vector} alt='cart' />
								<span className='text-[#9093A6]'>0</span>
							</div>
							<div className='bg-white p-[10px] rounded-full'>
								<Image src={menuIcon} alt='menu' />
							</div>
						</div>
					</nav>
				</div>
				<section className='flex flex-col sm:flex-row w-[90%] m-auto'>
					<aside className='sm:w-1/2 flex flex-col gap-[80px]'>
						<p className='sm:text-7xl text-[black] text-[40px] text-center sm:text-left w-[360px] sm:w-[550px] mt-[110px]'>
							Your Food court at home
						</p>
						<div className='flex justify-evenly sm:justify-between sm:w-[300px] w-full text-center'>
							<div className='border-solid border-2 border-[#FFE145] px-[25px] py-[10px]'>
								<p className='text-[20px]'>Delivery</p>
								<p>Order in</p>
							</div>
							<div className='border-solid border-2 border-[#FFE145] px-[25px] py-[10px]'>
								<p className='text-[20px]'>Takeout</p>
								<p>Grab and go</p>
							</div>
						</div>
					</aside>
					<aside className='flex justify-center items-center mt-[40px] sm:mt-0'>
						<Image src={photoPlate} alt='plate' />
					</aside>
				</section>
				<section className='w-full mb-10 mt-5 sm:mt-0'>
					<div className='flex flex-col gap-[30px] sm:gap-0 pl-10 sm:flex-row bg-white py-5 sm:w-[65%] sm:px-[60px] justify-between shadow-lg shadow-gray-400'>
						<div className='flex items-center gap-5'>
							<Image src={timeEat} alt='time eat' />
							<p className='w-[200px]'>
								delivery in all paris in&nbsp;less&nbsp;than 30 minutes
							</p>
						</div>
						<div className='flex items-center gap-5'>
							<Image src={deliveryIcon} alt='delivery' />
							<p className='w-[100px]'>Free delivery from&nbsp;29&nbsp;euros</p>
						</div>
						<div className='flex items-center gap-5'>
							<Image src={parisIcon} alt='paris' />
							<p>
								Only fresh <br />
								and&nbsp;French&nbsp;products
							</p>
						</div>
					</div>
				</section>
			</header>
			<main className='text-[black]'>
				<section className='w-[90%] m-auto'>
					<div className='flex justify-between items-center mb-[30px]'>
						<p className='text-[40px] tracking-[2px]'>Restaurants</p>
						<button className='bg-[#F2F4FA] text-[#9093A6] py-2 px-4'>
							show all
						</button>
					</div>
					<div className='flex flex-col sm:flex-row gap-[30px] pb-[30px]'>
						{[
							{ img: first, label: group29 },
							{ img: second, label: un },
							{ img: third, label: union },
							{ img: forth, label: uni },
						].map((item, i) => (
							<aside
								key={i}
								className='flex flex-col items-center shadow-lg shadow-gray-300'
							>
								<Image
									src={item.img}
									alt={`restaurant-${i}`}
									className='w-[320px] h-[230px]'
								/>
								<Image
									src={item.label}
									alt={`label-${i}`}
									className='mt-[20px] mb-[20px]'
								/>
							</aside>
						))}
					</div>
				</section>
				<section className='w-full bg-[#F2F4FA] sm:h-[350px] mt-[40px]'>
					<div className='w-[85%] m-auto flex flex-col sm:flex-row justify-between h-full'>
						<aside className='flex flex-col gap-[30px] justify-center'>
							<p className='text-[50px] tracking-[2px]'>
								Your nearest restaurants
							</p>
							<p className='text-[20px] w-[350px] sm:w-[550px]'>
								Each kitchen works with its own delivery area to deliver food to
								you as soon as possible
							</p>
						</aside>
						<aside className='flex flex-col gap-[30px] justify-center mb-[50px] sm:mb-0 mt-[30px] sm:mt-0'>
							<div className='flex bg-white items-center gap-[10px] pl-[10px]'>
								<Image src={loc} alt='location' />
								<input
									type='text'
									placeholder='Enter delivery address'
									className='outline-none w-[400px]'
								/>
								<button className='bg-[#FFE145] p-[25px] text-gray-400'>
									send
								</button>
							</div>
						</aside>
					</div>
				</section>
				<section className='w-[90%] m-auto mt-[40px] mb-[40px]'>
					<div className='flex justify-between items-center mb-[30px]'>
						<p className='text-[40px] tracking-[2px]'>Specialities</p>
						<button className='bg-[#F2F4FA] text-[#9093A6] py-2 px-4'>
							show all
						</button>
					</div>
					<div className='grid grid-cols-2 sm:grid-cols-8 gap-[30px]'>
						{Array(8)
							.fill(null)
							.map((_, i) => (
								<div
									key={i}
									className='flex flex-col gap-[10px] py-[20px] shadow-md shadow-gray-300 w-[150px] justify-center items-center'
								>
									<Image src={bagel} alt={`bagel-${i}`} />
									<p>Bagel</p>
								</div>
							))}
					</div>
				</section>
				<section className='izzy w-full flex flex-col px-[20px] gap-[50px] sm:flex-row sm:px-[300px] py-[50px] justify-between mt-[70px] mb-[60px]'>
					<Image src={comp9} alt='comp9' />
					<Image src={comp7} alt='comp7' />
					<Image src={comp8} alt='comp8' />
					<Image src={comp10} alt='comp10' />
				</section>
				<section className='w-[95%] m-auto'>
					<Image src={Map} alt='Map' />
				</section>
				<section className='w-[90%] m-auto mb-[50px]'>
					<p className='sm:text-[45px] text-[30px] tracking-[3px] mb-[30px]'>
						#YellowKitchens in instagram
					</p>
					<div className='grid sm:grid-cols-4 gap-[40px]'>
						{Array(4)
							.fill(null)
							.map((_, i) => (
								<div className='img' key={i}></div>
							))}
					</div>
				</section>
				<section className='w-[90%] m-auto py-[50px] gap-[50px] lg:flex-row flex-col flex justify-between items-center'>
					<Image src={ImgInsta} alt='insta Image'/>
					<Image src={ImgInsta} alt='insta Image'/>
					<Image src={ImgInsta} alt='insta Image'/>
					<Image src={ImgInsta} alt='insta Image'/>
				</section>
			</main>
			<footer className='w-full bg-[#3F4255] text-white'>
				<div className='flex gap-[50px] sm:gap-0 flex-col justify-between sm:flex-row'>
					<div className='sm:w-[30%] mt-[30px] flex flex-col items-start gap-[60px]'>
						<Image src={yellowKitchenLogo} alt='yellow kitchen logo' />
						<hr className='w-full h-[5px]' />
						<Image src={group32} alt='social icons' />
					</div>
					<div>
						<p className='text-[30px]'>About us</p>
						<p>Concept</p>
						<p>Business</p>
						<p>Restaurant signup</p>
						<p>For Investors</p>
						<p>Franchise</p>
					</div>
					<div>
						<p className='text-[30px]'>Get Help</p>
						<p>Read FAQS</p>
						<p>Restaurants</p>
						<p>Specialities</p>
						<p>Sign up</p>
						<p>English</p>
					</div>
					<div>
						<p className='text-[30px]'>Contact us</p>
						<p>Yellow kitchen Paris 11</p>
						<p className='w-[200px] leading-[30px]'>
							69 avenue de la Republique 75011 Paris
						</p>
						<p>0800 111 126</p>
						<p>contact@yellowkitchens.com</p>
					</div>
				</div>
				<section className='w-[90%] m-auto gap-[30px] lg:justify-between sm:gap-0 flex flex-col sm:flex-row items-start sm:justify-between py-[30px]'>
					<Image src={group19} alt='footer logo' />
					<div className='flex gap-[20px] sm:gap-[40px] flex-col sm:flex-row text-white'>
						<p>Privacy Policy</p>
						<p>Terms</p>
						<p>© 2020 Yellow kitchen</p>
					</div>
				</section>
			</footer>
		</>
	)
}

export default page
