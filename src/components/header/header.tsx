import { TextTag } from '../common/font/fontTag';

export default function Header() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '30px',
          borderBottom: '2px solid gray',
          padding: '0 300px 10px 30px'
        }}
      >
        <TextTag $fontsize='medium'>24/03/14</TextTag>
        <TextTag $fontsize='medium'>LEE SANG HYEON</TextTag>
        <TextTag $fontsize='medium'>THROUGH OUT THE WORK</TextTag>
      </div>
    </div>
  );
}
