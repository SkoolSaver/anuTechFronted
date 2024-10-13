const gradient = ["white", "yellow", "green", "blue"];

function GradientCard({ cardDetails, header, children, ...options }) {
  return (
    <>
      <div class="container">
        <p class="container-title">{header}</p>
        <div class="gradient-cards" {...options}>
          {cardDetails.lists.map((data, index) => {
            return (
              <div class="card">
                <div class={`container-card bg-${gradient[index % 4]}-box`}>
                  <p class="card-title">{data.header}</p>
                  <p class="card-description">{data.content}</p>
                  {children}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GradientCard;
