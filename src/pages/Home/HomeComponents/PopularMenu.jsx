
import popularMenuImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../globalComponents/SectionTitle';
import './css/popularMenu.css'
const PopularMenu = () => {
    return (
        <div className='popular-item bg-fixed my-10'>
            <div className='py-4'>
            <SectionTitle heading={"from Our Menu"} subHeading={"Check it out"} />
            </div>
            <div className='flex items-center gap-4 text-gray-600 font-semibold px-24 py-16 bg-slate-100 bg-opacity-25'>
                <img className='w-[400px]' src={popularMenuImg} alt="" />
                <div>
                    <p>March 20, 2023</p>
                    <h3 className='uppercase'>Where i can get some?</h3>
                    <p className='w-[600px] text-justify leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus, eaque inventore similique assumenda voluptate veniam. Officia sed sit ea doloribus blanditiis cupiditate fuga quos nisi dolorem! Hic veritatis ex et reiciendis obcaecati veniam necessitatibus, perferendis ipsam labore, eaque, facere vel aperiam ullam laborum dignissimos officia velit earum iste provident.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Learn More</button>
                </div>
            </div>
            
        </div>
    );
};

export default PopularMenu;