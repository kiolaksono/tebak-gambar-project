export default function EnterRoom({ room, handleEnterRoomm, handleSubmit }) {
  return (
    <div className="flex flex-wrap justify-center pt-10">
      <form onSubmit={handleSubmit}>
        <div className="gap-10 flex w-full">
          <input
            type="text"
            placeholder="Room name"
            className="input input-bordered w-full max-w-xs"
          />

          <button type="submit" className="btn btn-accent">
            Create Room
          </button>
        </div>
      </form>
    </div>
  );
}
