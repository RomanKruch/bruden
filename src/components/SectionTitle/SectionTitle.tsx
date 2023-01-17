import "./SectionTitle.scss"

interface IProps {
    text: string;
}

const SectionTitle = ({ text }: IProps) => (
    <h2 className='sectionTitle'>
        {text}
    </h2>
)

export default SectionTitle;