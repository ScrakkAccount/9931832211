import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, PackageSearch, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Entrega Digital Instantánea",
      description: "Accede a tus compras digitales al momento de la confirmación."
    },
    {
      icon: <PackageSearch className="h-10 w-10 text-primary" />,
      title: "Variedad y Calidad",
      description: "Un amplio catálogo de productos digitales, desde software hasta diseños únicos."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Soporte Confiable",
      description: "Nuestro equipo está listo para asistirte con cualquier duda o inconveniente."
    }
  ];

  return (
    <div className="space-y-12 py-6 sm:py-12">
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-10 sm:py-16 md:py-24 rounded-xl glassmorphism shadow-2xl overflow-hidden px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 via-transparent to-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-2 sm:px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Bienvenido a <motion.span 
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >RyVen Shop</motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Tu tienda online de confianza para todo tipo de productos digitales. ¡Descubre un universo de posibilidades!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-lg shadow-lg">
                Explorar Catálogo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="container mx-auto px-4">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text"
        >
          ¿Por qué RyVen Shop?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-6 sm:p-8 rounded-xl glassmorphism shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <motion.div 
                className="mb-5 p-4 bg-primary/10 rounded-full"
                whileHover={{ rotate: 5 }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <motion.section 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="p-6 sm:p-10 rounded-xl glassmorphism shadow-xl"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            ¿Listo para descubrir?
          </motion.h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Explora nuestra amplia gama de productos digitales y encuentra exactamente lo que necesitas para tus proyectos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
            <Link to="/shop" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <Button size="lg" variant="default" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3">Ver Tienda</Button>
              </motion.span>
            </Link>
            <Link to="/support" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 border-primary text-primary hover:bg-primary/10">Contactar Soporte</Button>
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
  