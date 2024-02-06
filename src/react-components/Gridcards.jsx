import React from "react";
import { Card, CardHeader, Image, Chip, Avatar } from "@nextui-org/react";

const App = ({ projectsObject }) => {
    const renderCard = (project, index) => {
        const cardSizes = [
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
            "w-full h-[300px] col-span-12 sm:col-span-5",
            "w-full h-[300px] col-span-12 sm:col-span-7",
        ];
        const cardSize = cardSizes[index % cardSizes.length];
        if (!projectsObject) {
            return <div>No hay proyectos disponibles</div>;
        }
        return (
            <Card key={index} className={`shadow-md shadow-fuchsia-500/20 ${cardSize}`}>
                <CardHeader className="absolute z-10 top-1 flex-col items-start gap-2">
                    <h4 className="text-white font-medium text-large">{project.title}</h4>
                    <div className="flex gap-2">
                        {project.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                variant="bordered"
                                classNames={{
                                    base: "border-small border-fuchsia-500 bg-fuchsia-700",
                                    content: "drop-shadow shadow-black text-white",
                                }}
                                avatar={
                                    <Avatar
                                        name={tag.name}
                                        src={tag.src}
                                    />
                                }
                            >
                                {tag.name}
                            </Chip>
                        ))}
                    </div>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={project.src}
                />
            </Card>
    );
    };

    return (
        <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {projectsObject.map((project, index) => renderCard(project, index))}
        </div>
    );
};

export default App;
