export default function Home() {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-between overflow-hidden p-24'>
      <div
        className={
          'fixed left-[50%] top-[50%] w-2/3 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-semibold'
        }
      >
        <span className={'relative'}>
          Creative Web Developer
          <span
            className={
              'absolute bottom-0 whitespace-nowrap text-lg font-normal'
            }
          >
            UK Based
          </span>
        </span>
      </div>
    </main>
  );
}
