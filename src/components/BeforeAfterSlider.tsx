import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import paintedInterior from '@/assets/painted-interior.webp';
import woodRepair from '@/assets/wood-repair.webp';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Bekijk Onze Transformaties
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Before/After Slider */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <h3 className="text-lg font-semibold p-4 text-center bg-primary text-primary-foreground">
                    Woonhuis Renovatie - Enschede
                  </h3>
                  <div 
                    ref={containerRef}
                    className="relative h-64 md:h-80 overflow-hidden cursor-col-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                  >
                    {/* Before Image (Full width) */}
                    <img 
                      src={paintedInterior} 
                      alt="Voor renovatie" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* After Image (Clipped) */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img 
                        src={woodRepair} 
                        alt="Na renovatie" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Slider Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-1 h-4 bg-gray-400"></div>
                      </div>
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      VOOR
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      NA
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Before/After Slider */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <h3 className="text-lg font-semibold p-4 text-center bg-primary text-primary-foreground">
                    Houtrot Reparatie - Hengelo
                  </h3>
                  <div 
                    className="relative h-64 md:h-80 overflow-hidden cursor-col-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                  >
                    {/* Before Image (Full width) */}
                    <img 
                      src={woodRepair} 
                      alt="Voor reparatie" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* After Image (Clipped) */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img 
                        src={paintedInterior} 
                        alt="Na reparatie" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Slider Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-1 h-4 bg-gray-400"></div>
                      </div>
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      VOOR
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      NA
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schuif de slider om de transformatie te zien. Onze vakmanschap zorgt voor 
              duurzame resultaten die jarenlang meegaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider; 