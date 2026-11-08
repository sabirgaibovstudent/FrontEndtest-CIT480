import CategoryItem from '../components/CategoryItem';

const categories = [
    { href: "/double door", name: "Double Door", imageUrl:"/double door.png"},
    { href: "/fancy door", name: "Fancy Door", imageUrl:"/fancy door.png"},
    { href: "/weird door", name: "Weird Door", imageUrl:"/weird door.png"},
    { href: "/hemlock door", name: "Hemlock Door", imageUrl:"/hemlock door.png"},
    { href: "/oak door", name: "Oak Door", imageUrl:"/oak door.png"},
    { href: "/old door", name: "Old Door", imageUrl:"/old door.png"},
    { href: "/regular door", name: "Regular Door", imageUrl:"/regular door.png"}

];

const HomePage = () => {
    return (
        <div className='relative min-h-screen text-white overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
                    Explore our Doors!
                </h1>
                <p className='text-center text-xl text-gray-300 mb-12'>
                    Discover a variety of unique and stylish doors for your home.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categories.map(category => (
                        <CategoryItem category={category} key={category.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HomePage;