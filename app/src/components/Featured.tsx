const demoData = [
    {
        img: "https://th.bing.com/th/id/OIP.wnzRul70EVK8842rmgh9nAHaEo?w=256&h=180&c=7&r=0&o=5&pid=1.7",
        title: "Dulbin",
        desc: "123 properties"
    },
    {
        img: "https://th.bing.com/th/id/OIP.uVxMGwHUNOw_kIWoild50gHaFj?w=260&h=195&c=7&r=0&o=5&pid=1.7",
        title: "Austin",
        desc: "860 properties"
    },
    {
        img: "https://th.bing.com/th/id/OIP.y5sI5nn9gOg0PZHFgw4iLAHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7",
        title: "Reno",
        desc: "526 properties"
    }
]

const Featured = () => {
  return (
    <div className="flex items-center space-x-4 h-64">
        {demoData.map((item,index) => (
            <div key={index} className="h-full flex-1 rounded-md overflow-hidden cursor-pointer relative">
            <img className="h-full w-full object-cover" src={item.img} alt="Property type" />
            <div className="absolute text-white font-bold bottom-6 pl-4">
                <p className="text-2xl">{item.title}</p>
                <p>{item.desc}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Featured