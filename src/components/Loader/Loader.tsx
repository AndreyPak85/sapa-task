export const Loader = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width='200px'
        height='200px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <path
          d='M21 50A29 29 0 0 0 79 50A29 31 0 0 1 21 50'
          fill='#102c56'
          stroke='none'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='1s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 50 51;360 50 51'
          ></animateTransform>
        </path>
      </svg>
    </>
  );
};
