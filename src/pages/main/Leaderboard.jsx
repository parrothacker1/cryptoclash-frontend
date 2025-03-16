import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { motion } from "framer-motion";

const leaderboardData = [
  { position: 1, teamName: "Alpha Squad", score: 250 },
  { position: 2, teamName: "Beta Warriors", score: 230 },
  { position: 3, teamName: "Gamma Legends", score: 210},
  { position: 4, teamName: "Delta Force", score: 190},
  { position: 5, teamName: "Epsilon Stars", score: 170  },
];

const Leaderboard = () => {
  const [data, setData] = useState(leaderboardData);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen bg-[#121212] text-white font-['Playfair_Display']"
    >
      <div className="w-full max-w-5xl p-12 bg-[#1A1A1A] rounded-3xl shadow-2xl border-4 border-[#ADFF2F] transition-transform duration-500 hover:scale-105 hover:shadow-green-500">
        <h2 className="text-6xl font-extrabold text-center mb-10 uppercase text-black bg-[#ADFF2F] py-4 rounded-lg shadow-md">Leaderboard</h2>
        <Table className="text-2xl w-full">
          <TableHeader>
            <TableRow className="bg-black text-[#ADFF2F] text-3xl hover:bg-[#9BE02C] hover:text-black transition-all duration-300">
              <TableHead className="text-left p-6">Position</TableHead>
              <TableHead className="text-left p-6">Team Name</TableHead>
              <TableHead className="text-left p-6">Score</TableHead>
            
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((team, index) => (
              <TableRow key={index} className="border-b-4 border-[#ADFF2F] text-3xl transition-all duration-300 hover:bg-[#ADFF2F] hover:text-black hover:scale-105 hover:shadow-lg hover:translate-x-1 hover:translate-y-1">
                <TableCell className="p-6 text-white font-bold rounded-l-lg">{team.position}</TableCell>
                <TableCell className="p-6">{team.teamName}</TableCell>
                <TableCell className="p-6">{team.score}</TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
