import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

import ResumeCard from "~/components/ResumeCard";
import { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resu-Match AI" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth, isLoading,kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setresumes] = useState<Resume[]>([]);
  const [loadingResumes, setloadingResumes] = useState(false);
  
  

  useEffect(() => {
    if(!isLoading && !auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated]);

  useEffect(() =>{
    const loadingResumes = async() =>{
      setloadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) =>(
        JSON.parse(resume.value) as Resume
      ))

      console.log(parsedResumes);
      setresumes(parsedResumes || []);
      setloadingResumes(false);

    }
    loadingResumes();
  },[]);

  
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applictaions & Resume Ratings</h1>
        {!loadingResumes && resumes.length === 0 ? (
          <h2>No resumes found. Upload your first resume to get feedback.</h2>

        ):(
          <h2>Review your submissions and check AI-powered feedback.</h2>
        )}
        
      </div>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img src="/images/resume-scan-2.gif" className="w-[200px]"/>
        </div>
      )}
      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
            {resumes.map((resume)=>(
              <ResumeCard key={resume.id} resume={resume}></ResumeCard>
            ))}
        </div>
      )}
      {!loadingResumes && resumes?.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
          Upload Resume
          </Link>
        </div>
      )}
    </section>
    
    

    

    
  </main>
}
