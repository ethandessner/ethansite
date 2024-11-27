export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="container mx-auto flex flex-col px-6">
      <div className="flex mb-4 py-6">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Status: Building <em>Unititled Winter Game</em>
        </span>
      </div>
      <h1 className="text-5xl font-bold mb-4">Ethan Dessner</h1>
    </header>
      <section className="container mx-auto px-6 pt-6">
        <h2 className="text-3xl font-bold mb-6">Developer log covering <em>Unititled Winter Game</em></h2>
        <div className="space-y-4">
        <div>
            <p className="text-black-600">
            <strong>11.20.24</strong>
            </p>
          </div>
          <div>
            <p className="text-black-600">
              <strong>Why do you want to create a game?</strong>
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              I want to create a game that makes people feel immersed in the environments that I find comfort in.
            </p>
          </div>
          <div>
            <p className="text-black-600">
            <strong>What does that look like?</strong>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-black-600">
                I always had an obsession with characters in harsh environments and telling the story of that journey. 
            </p>
            <p className="text-gray-600">
                I often tell stories by word of mouth, but I want people to see what I see.
            </p>
            <p className="text-gray-600">
                I have always gravitated towards cold, harsh, winter environments where the character needs to hunt, forage, and build shelters. 
            </p>
            <p className="text-gray-600">
                What I love the most about these environments is the quiet that exists despite the dire need for survival.
            </p>
          </div>
          <div>
            <p className="text-black-600">
            <strong>How can you bring this to life?</strong>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
            I have found similar feelings of this in the game A Dark Room.
            </p>
            <p className="text-gray-600">
            I like the journey the player goes on, especially when they are able to venture out in the wilderness and encounter different enemies and environments.
            </p>
            <p className="text-gray-600">
            I would start off by modifying the code of this game, since it is public, and adding in this “winter” environment that I find comforting.
            </p>
          </div>
          <div>
            <p className="text-black-600">
            <strong>11.27.24</strong>
            </p>
          </div>
          <div>
            <p className="text-black-600">
            <strong>How will players progress? What is the reward system?</strong>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
            I like the idea of gathering more resources and getting better tools and equipment - it rewards the player for exploring the map and new environments.
            </p>
            <p className="text-gray-600">
            Getting stronger and being able to take on bigger enemies with less struggle and more strategy due to an increase in resources is always a green flag for me as a player.
            </p>
          </div>
          <div>
            <p className="text-black-600">
            <strong>What is the core game mechanic you will focus on?</strong>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
            The main mechanic is the idle progression - what new resources can you collect as a result of exploration?
            </p>
            <p className="text-gray-600">
            What new things can you build as a result of allowing events to trigger?
            </p>
            <p className="text-gray-600">
            Basically, rewarding the player for interacting with different facets of the game will drive it forward.
            </p>
            <p className="text-gray-600">
            Not sure if this makes sense or is an airtight/simple answer, but we’ll get there.           
            </p>
          </div>

        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Storytelling through mediums</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Game Developer</h3>
            <p className="text-gray-600">
              I am currently making my very first game. I tell stories by word of mouth, but I want people to see what I see. This is how I tell stories using an experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Standup Comedian</h3>
            <p className="text-gray-600">
              This is how I tell stories using a performative outlet.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Runway Model</h3>
            <p className="text-gray-600">
              This is how I tell stories using a visual outlet.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2024 Ethan Dessner. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
