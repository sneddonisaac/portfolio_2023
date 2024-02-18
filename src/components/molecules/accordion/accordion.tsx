import React from "react"
import "./accordion.scss"

type AccordionItemType = {
    title: string;
    active?: boolean;
    content: string;
}

interface AccordionProps {
    items: AccordionItemType[];
    activeIndex?: number;
}

interface AccordionItemProps extends AccordionItemType {
    active: boolean;
    onClick: () => void;
}

function Accordion({ items, activeIndex = 1 }: AccordionProps) {
    const [currentActive, setCurrentActive] = React.useState(activeIndex - 1);

    const handleItemClick = (index: number) => {
        setCurrentActive(index === currentActive ? -1 : index);
    };
    return (
        <dl className="accordion">
            {items.map((i, index) => (
                <AccordionItem
                    key={index}
                    title={i.title}
                    content={i.content}
                    active={index === currentActive}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </dl>
    )

}

function AccordionItem({ title, active = false, content, onClick }: AccordionItemProps) {
    return (
        <div className="accordion__item">
            <dt className="accordion__item-title interactable" onClick={onClick}>
                <h3>{title}</h3>
                <div className="accordion__item-title__icon" data-active={active}>
                    <div />
                    <div />
                </div>
            </dt>
            <dd className="accordion__item-content" data-open={active}>
                <p>{content}</p>
            </dd>
        </div>
    )
}

export { Accordion }