import React from 'react';
import Image from 'next/image';

const Clients: React.FC = () => {
	return (
		<div className="bg-gradient-to-b from-black via-gray-900 to-black py-8">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
				<h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text pt-8">
					Our Clients
				</h2>
				<div className="flex justify-center items-center space-x-8">
					{['/client1.png', '/client2.png', '/client3.png'].map((client, index) => (
						<div key={index} className="bg-gradient-to-br from-gray-100 to-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300">
							<Image
								src={client}
								alt={`Client ${index + 1} Logo`}
								width={150}
								height={75}
								objectFit="contain"
								className="transition-all duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
