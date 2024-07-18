import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ userId }) => {
  const profileURL = `http://localhost:3000/profile/${userId}`;

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-12 mr-12 bg-white shadow-lg rounded-lg">
      <div className="p-4 bg-gray-100 rounded-lg">
        <QRCode value={profileURL} size={256} />
      </div>
      <p className="mt-4 text-gray-700">Scan to view profile</p>
    </div>
  );
};

export default QRCodeDisplay;
