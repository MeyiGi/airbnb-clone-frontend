import ReservationCard from "./reservationCard";

export default function MyReservationPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 mb-6 text-2xl">My reservation</h1>

      <div className="space-y-4">
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </div>
    </main>
  );
}
