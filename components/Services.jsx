import {GanttChartSquare, Blocks, Gem} from "lucide-react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: "I create visually stunning, user-friendly web designs that capture your brand's essence and engage your audience. My responsive designs ensure your site looks great on all devices, from desktops to smartphones."
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: "I bring your web design to life with clean, efficient coding. Whether you need an informational website, e-commerce platform, or custom application, I use the latest technologies to ensure your site is fast, secure, and scalable."
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Brand Development',
        description: "I help you build a strong, cohesive brand identity that resonates with your audience. From logo design to brand messaging, I ensure consistency across all your marketing materials to create lasting brand loyalty."
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