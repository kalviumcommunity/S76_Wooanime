import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CarAvoidanceGame() {
  const [carPosition, setCarPosition] = useState(175); // Car's horizontal position
  const [obstacles, setObstacles] = useState([]); // Array of obstacles
  const [score, setScore] = useState(0); // Player's score
  const [speed, setSpeed] = useState(5); // Speed of obstacles
  const [gameOver, setGameOver] = useState(false); // Game state

  // Handle car movement with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      setCarPosition((prev) => {
        if (e.key === "ArrowLeft" && prev > 0) return prev - 25;
        if (e.key === "ArrowRight" && prev < 350) return prev + 25;
        return prev;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Spawn obstacles with reduced frequency and a cap on number
  useEffect(() => {
    if (gameOver) return;

    const spawnObstacle = () => {
      // Limit the number of obstacles to 3 at a time
      if (obstacles.length >= 3) {
        setTimeout(spawnObstacle, 1000); // Check again after 1 second
        return;
      }

      setObstacles((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 350, top: -100 },
      ]);

      // Increase base delay to 3.5s and reduce frequency scaling with score
      const baseDelay = 3500; // Slower spawning (3.5s)
      const minDelay = 1500; // Minimum delay (1.5s)
      const delayReduction = Math.min(score * 50, baseDelay - minDelay); // Slower reduction (50ms per point)
      const delay = Math.random() * 1000 + (baseDelay - delayReduction); // Wider random range

      setTimeout(spawnObstacle, delay);
    };

    spawnObstacle(); // Start spawning
    return () => clearTimeout(spawnObstacle);
  }, [gameOver, score, obstacles]); // Add obstacles as dependency to check length

  // Move obstacles and handle scoring/collision
  useEffect(() => {
    if (gameOver) return;

    const moveObstacles = setInterval(() => {
      setObstacles((prev) =>
        prev
          .map((obstacle) => ({
            ...obstacle,
            top: obstacle.top + speed,
          }))
          .filter((obstacle) => {
            // Check collision with car
            const hit =
              carPosition < obstacle.left + 50 &&
              carPosition + 50 > obstacle.left &&
              500 < obstacle.top + 100 &&
              600 > obstacle.top;

            if (hit) {
              setGameOver(true);
              return false;
            }

            // Remove obstacle and increase score if it passes the bottom
            if (obstacle.top >= 600) {
              setScore((prevScore) => {
                const newScore = prevScore + 1;
                if (newScore % 5 === 0) setSpeed((prevSpeed) => prevSpeed + 1);
                return newScore;
              });
              return false;
            }
            return true;
          })
      );
    }, 30); // Update every 30ms for smooth movement

    return () => clearInterval(moveObstacles);
  }, [gameOver, speed, carPosition]);

  // Restart the game
  const restartGame = () => {
    setCarPosition(175);
    setObstacles([]);
    setScore(0);
    setSpeed(5);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Car Avoidance Game 🚗</h1>
      {gameOver ? (
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500 mb-4">
            Game Over! Score: {score}
          </div>
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Restart Game
          </button>
        </div>
      ) : (
        <div className="relative w-96 h-[600px] bg-gray-600 overflow-hidden">
          <div className="absolute top-2 left-2 text-lg">Score: {score}</div>
          <motion.div
            className="absolute bottom-5 w-12 h-24 bg-red-500 rounded"
            animate={{ left: carPosition }}
            transition={{ type: "tween", duration: 0.1 }} // Smooth car movement
          />
          {obstacles.map((obstacle) => (
            <motion.div
              key={obstacle.id}
              className="absolute w-12 h-24 bg-black rounded"
              style={{ left: obstacle.left, top: obstacle.top }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
