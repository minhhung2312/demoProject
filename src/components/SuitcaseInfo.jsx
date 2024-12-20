import React from 'react';
import '../assets/css/SuitcaseInfo.css'; 

const SuitcaseInfo = () => {
  return (
    <div className="suitcase-info-container">
      <p><strong>Rolling suitcases</strong> are not just for storing items for a trip, allowing travelers to have all their necessary things to explore new destinations, but also a journey of convenience. With many outstanding advantages, rolling travel suitcases not only help protect belongings but also bring convenience and style to the user.</p>
      <h2 className="title">What materials are used for rolling suitcases?</h2>
      <p className="description">
        Here are the options for choosing a suitcase based on material:
      </p>
      <ul className="material-list">
        <li>
          <strong>- Plastic suitcases:</strong> Usually made from premium materials like ABS, Polycarbonate, and high-durability granule plastics, which help protect the suitcase and keep it looking new over time.
        </li>
        <li>
          <strong>- Fabric suitcases:</strong> Typically made from tightly woven nylon or polyester, resistant to compression and impacts. These materials ensure durability during use.
        </li>
        <li>
          <strong>- Aluminum frame suitcases:</strong> Aluminum frame suitcases are lightweight but very durable and sturdy. This type of suitcase is favored by many for its sturdiness and aesthetic appeal.
        </li>
      </ul>

      <h2 className="title">Convenience and Security</h2>
      <p className="description">
        <strong>Rolling travel suitcases</strong> are often designed with many features to protect belongings and enhance safety throughout your journey:
      </p>
      <ul className="features-list">
        <li>Rolling travel suitcases are often equipped with a secure combination lock to protect the items inside your suitcase.</li>
        <li>With smart designs like 360-degree spinning capability, making it easy to move in any direction without much effort.</li>
        <li>Large-sized suitcases with anti-slash fabric help protect the TSA combination lock, making it convenient for airport security checks when needed.</li>
      </ul>

      <h2 className="title">How to Choose a Suitcase Size</h2>
      <p className="description">
        The choice of suitcase size depends on your usage needs. Common suitcase sizes include:
      </p>
      <ul className="size-list">
        <li>
          <strong>Cabin size (S):</strong> This is a compact suitcase, small enough to be carried as hand luggage onto an airplane.
        </li>
        <li>
          <strong>Medium size (M):</strong> This is a medium-sized suitcase, typically weighing between 20-25kg, suitable for short trips.
        </li>
        <li>
          <strong>Large size (L):</strong> This is a large suitcase, ideal for long business trips.
        </li>
      </ul>
    </div>
  );
};

export default SuitcaseInfo;
