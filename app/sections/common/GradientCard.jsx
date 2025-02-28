const gradient = ["white", "yellow", "green", "blue"];

function GradientCard({ cardDetails, header, children, ...options }) {
  return (
    <div className="container">
      <p className="container-title">{header}</p>
      <div className="gradient-cards" {...options}>
        {cardDetails.lists.map((data, index) => (
          <div className="card" key={index}>
            <div className={`container-card bg-${gradient[index % 4]}-box`}>
              <p className="card-title">{data.header}</p>
              <p className="card-description">{data.content}</p>
              {children}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradientCard;
