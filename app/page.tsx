export default function Home() {
  return (
    <div className="flex h-full flex-col gap-6 md:flex-row">
      {/* Main Content Column */}
      <div className="flex flex-1 flex-col gap-6">
        <div className="rounded-xl bg-purple-100 p-8 text-purple-900">
          <h2 className="text-2xl font-bold">Hero Banner Placeholder</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="h-24 rounded-xl bg-muted p-4">Category 1</div>
          <div className="h-24 rounded-xl bg-muted p-4">Category 2</div>
          <div className="h-24 rounded-xl bg-muted p-4">Category 3</div>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-bold">Continue Watching Placeholder</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="aspect-video rounded-lg bg-muted"></div>
            <div className="aspect-video rounded-lg bg-muted"></div>
            <div className="aspect-video rounded-lg bg-muted"></div>
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-bold">Your Lesson Placeholder</h3>
          <div className="h-32 bg-muted/50"></div>
        </div>
      </div>

      {/* Right Sidebar Panel Column */}
      <div className="flex w-full flex-col gap-6 md:w-80">
        <div className="rounded-xl border p-6 text-center">
          <div className="mx-auto mb-4 h-32 w-32 rounded-full border-4 border-purple-500 bg-muted"></div>
          <h3 className="text-lg font-bold">Statistic Placeholder</h3>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-bold">Activity Chart</h3>
          <div className="h-40 bg-muted"></div>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-bold">Your Mentor</h3>
          <div className="space-y-4">
            <div className="h-12 rounded-lg bg-muted"></div>
            <div className="h-12 rounded-lg bg-muted"></div>
            <div className="h-12 rounded-lg bg-muted"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
