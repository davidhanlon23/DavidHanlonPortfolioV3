'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Coffee, Lightbulb } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/ui"
import { ABOUT_DATA } from './constants';

export default function AboutMe() {
    const { skills, professionalSummary, hobbies, currentFocus, avatarUrl } = ABOUT_DATA;

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <Avatar className="w-48 h-48 mb-4">
              <AvatarImage src={avatarUrl} alt="David Hanlon" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mt-4">David Hanlon</h3>
            <p className="text-muted-foreground">Senior Full Stack Engineer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2" /> Professional Summary
                </h3>
                <p className="text-muted-foreground">
                  {professionalSummary}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Code className="mr-2" /> Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Coffee className="mr-2" /> A Bit More About Me
                </h3>
                <p className="text-muted-foreground">
                  {hobbies}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Lightbulb className="mr-2" /> Current Focus
              </h3>
              <p className="text-muted-foreground">
                {currentFocus}
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
        {/** @TODO update this */}
          <Button size="lg" className="group">
            View My Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}