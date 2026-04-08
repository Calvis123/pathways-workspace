'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, X } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Guides: 'bg-brand-blue/10 text-brand-blue',
  IELTS: 'bg-green-50 text-green-700',
  'Visa Guide': 'bg-orange-50 text-orange-700',
  Scholarships: 'bg-brand-yellow/20 text-brand-dark',
};

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const post = selectedPost !== null ? blogPosts[selectedPost] : null;

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue mb-4">Blog</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resources & Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Expert tips, guides, and the latest information to help you on your study abroad journey</p>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((bp, i) => (
            <motion.div key={bp.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow rounded-xl border-gray-100">
                <div className="h-1 bg-brand-blue rounded-t-xl" />
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[bp.category] || 'bg-gray-100 text-gray-600'}`}>
                      {bp.category}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{bp.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">{bp.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {bp.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {bp.date}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="px-5 pb-5 pt-0">
                  <Button variant="ghost" className="w-full text-brand-blue hover:bg-brand-light justify-start p-0 h-auto font-medium" onClick={() => setSelectedPost(i)}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedPost !== null} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0 sm:rounded-2xl">
          {post && (
            <>
              <div className="bg-gradient-to-r from-brand-blue to-brand-dark p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <Badge className="bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30">{post.category}</Badge>
                  <button onClick={() => setSelectedPost(null)} className="text-white/60 hover:text-white transition-colors" aria-label="Close blog post">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <DialogHeader className="mt-4">
                  <DialogTitle className="text-xl font-bold text-white leading-tight">{post.title}</DialogTitle>
                  <DialogDescription className="text-white/60">{post.date} | {post.readTime}</DialogDescription>
                </DialogHeader>
              </div>
              <div className="p-6">
                <div className="prose prose-gray max-w-none">
                  <ReactMarkdown components={{
                    h2: ({ children }) => <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-3">{children}</p>,
                    ul: ({ children }) => <ul className="mb-4 ml-5 list-disc space-y-1 text-gray-700">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-4 ml-5 list-decimal space-y-1 text-gray-700">{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  }}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
