import React from "react";
import Card from "../../UI/Card";

function CardList() {
  return (
    <div className="flex justify-between flex-wrap  border mt-5">
      <Card
        bgUrl="https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?size=626&ext=jpg&ga=GA1.1.1461625483.1707631734&semt=ais"
        title="EFFICIENCY"
        subTitle="Lorem Ipsum"
        digits="1.1921"
        change="+0.0015 (+0.13%)"
        total="0.00 USD"
      />
      <Card
        bgUrl="https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?size=626&ext=jpg&ga=GA1.1.1461625483.1707631734&semt=ais"
        title="TIME TO MARKET"
        subTitle="Lorem Ipsum"
        digits="327,176"
        change="-97,914.00(-23.03%)"
        total="131,040,723,108 JPY"
      />
      <Card
        bgUrl="https://img.freepik.com/premium-photo/double-exposure-virtual-creative-financial-diagram-empty-room-interior-background-banking-accounting-concept_505557-10843.jpg?w=900"
        title="TECH DEBT"
        subTitle="Lorem Ipsum"
        digits="1.1763"
        change="+0.0015 (+0.13%)"
        total="0.00 USD"
      />
      <Card
        bgUrl="https://img.freepik.com/free-vector/economy-stock-market-growth-finacial-recovery_1017-27105.jpg?w=996&t=st=1712644222~exp=1712644822~hmac=93fe7288f2f1f230d31666b51a7d6460c15b1c738f2c1afad8bc4b4466a781e7"
        title="PREDICTABILITY"
        subTitle="Lorem Ipsum"
        digits="0.00313010"
        change="-o.ooo50430 (-13.88%)"
        total="1,566 BTC"
      />
    </div>
  );
}

export default CardList;
