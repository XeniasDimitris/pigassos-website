export default function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center mb-8 ${className || ''}`}>
      <span className='w-16 h-0.5 mt-4 border border-primary' />
    </div>
  );
}
