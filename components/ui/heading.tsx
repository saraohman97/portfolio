interface HeadingProps {
  title: string;
  description: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, description, center }) => {
  return (
    <div className={`mt-20 mb-10 ${center ? "text-center" : ""}`}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="font-bold">{description}</p>
    </div>
  );
};

export default Heading;
