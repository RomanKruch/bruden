import './SectionTitle.scss';

interface IProps {
  text: string;
  className?: string;
}

const SectionTitle = ({ text, className = '' }: IProps) => (
  <h2 className={`sectionTitle ${className}`}>{text}</h2>
);

export default SectionTitle;
