import {GanttChartSquare, Blocks, Gem} from "lucide-react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: "Services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reprehenderit nihil modi mollitia maxime tempora iste sint! Dolorem, aliquid. Suscipit magni ipsa earum aut nisi odio a dolorem nulla esse."
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: "Services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reprehenderit nihil modi mollitia maxime tempora iste sint! Dolorem, aliquid. Suscipit magni ipsa earum aut nisi odio a dolorem nulla esse. "
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Brand Development',
        description: "Services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reprehenderit nihil modi mollitia maxime tempora iste sint! Dolorem, aliquid. Suscipit magni ipsa earum aut nisi odio a dolorem nulla esse."
    },
];
const Services = () => {
  return <section className="mb-12 xl:mb-36"> 
    <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
            Services I Render
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 jsutify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"> 
        {servicesData.map((item, index)=> {
            return <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                <CardHeader className="text-primary absolute -top-[60px]">
                    <div className="w-[140px] h-[80px] dark:bg-background bg-white flex justify-center items-center">{item.icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                    <CardTitle className="mb-4">
                        {item.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                        {item.description}
                    </CardDescription>
               
                </CardContent>
            </Card>
        })}
        </div>
    </div>
   </section>
};

export default Services