
const Footer = () => {
  return (
    <footer className="bg-[#FFEDCC80] py-16 px-[5%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-[#543EE0] text-2xl font-bold font-DM-Sans">CHATTER</h2>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Explore</h3>
            <div className="space-y-2">
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Community</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Trending blogs</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Chatter for teams</p>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Support</h3>
            <div className="space-y-2">
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Support docs</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Join slack</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</p>
            </div>
          </div>

          {/* Official blog */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Official blog</h3>
            <div className="space-y-2">
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Official blog</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Engineering blog</p>
            </div>
          </div>
        </div>
      </div>
    </footer>   
  )
}

export default Footer   