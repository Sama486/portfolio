import { CertificateCategory } from "../types/interfaces";

export const getCertificates = (language: string): CertificateCategory[] => [
    {
        name: language === 'de' ? "Programmierung" : "Programming",
        certificates: [
            {
                id: "programming-1",
                title: "Coursera Data analysis using Python",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Data analysis using Python.pdf",
                description: language === 'de' ? "Datenanalyse mit Python" : "Data analysis with Python"
            },
            {
                id: "programming-2",
                title: "Coursera Introduction to Python programming",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Introduction to Python programming.pdf",
                description: language === 'de' ? "Einführung in Python-Programmierung" : "Introduction to Python programming"
            },
            {
                id: "programming-3",
                title: "Coursera Introduction to Programming with Python and Java",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Introduction to Programming with Python and Java.pdf"
            },
            {
                id: "programming-4",
                title: "Coursera Java Inheritance and Data Structures",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Java Inheritance and Data Structures.pdf",
                description: language === 'de' ? "Java Vererbung und Datenstrukturen" : "Java inheritance and data structures"
            },
            {
                id: "programming-5",
                title: "Coursera Java Object-Oriented Programming",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Java Object-Oriented Programming.pdf",
                description: language === 'de' ? "Java objektorientierte Programmierung" : "Java object-oriented programming"
            },
            {
                id: "programming-6",
                title: "Coursera Docker Kubernetes OpenShift",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Docker Kubernetes OpenShift.pdf",
                description: language === 'de' ? "Container-Technologien" : "Container technologies"
            },
            {
                id: "programming-7",
                title: "Coursera Meta Advanced React",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Meta Advanced React.pdf",
                description: language === 'de' ? "Fortgeschrittenes React von Meta" : "Advanced React from Meta"
            },
            {
                id: "programming-8",
                title: "Coursera Typescript",
                category: language === 'de' ? "Programmierung" : "Programming",
                pdfUrl: "./certificates/Wichtig/Coursera Typescript.pdf",
                description: language === 'de' ? "TypeScript-Grundlagen" : "TypeScript basics"
            }
        ]
    },
    {
        name: language === 'de' ? "Sonstige" : "Other",
        certificates: [
            {
                id: "other-1",
                title: "Abschlusszeugnis Karim Benziane",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Abschlusszeugnis_Karim Benziane (1).pdf",
                description: language === 'de' ? "Abschlusszeugnis" : "Graduation certificate"
            },
            {
                id: "other-2",
                title: "Arbeitszeugnis Ingenium",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Arbeitszeugnis Ingenium Labs Karim 14-5-24 (1).pdf",
                description: language === 'de' ? "Arbeitszeugnis" : "Work reference"
            },
            {
                id: "other-3",
                title: "CV Karim Benziane",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/CV Karim Benziane.pdf",
                description: language === 'de' ? "Lebenslauf" : "Curriculum Vitae"
            },
            {
                id: "other-4",
                title: "Facebook für Firmen",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Facebook für Firmen.pdf",
                description: language === 'de' ? "Social Media für Unternehmen" : "Social media for companies"
            },
            {
                id: "other-5",
                title: "IHKPruefung",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/IHKPruefung (1).pdf",
                description: language === 'de' ? "IHK-Prüfung" : "Chamber of Commerce examination"
            },
            {
                id: "other-6",
                title: "Karim_Arbeitszeugnis",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Karim_Arbeitszeugnis.pdf",
                description: language === 'de' ? "Arbeitszeugnis" : "Work reference"
            },
            {
                id: "other-7",
                title: "Künstliche Intelligenz",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Künstliche Intelligenz.pdf",
                description: language === 'de' ? "KI-Grundlagen" : "AI basics"
            },
            {
                id: "other-8",
                title: "Produktiv im Homeoffice",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Produktiv im Homeoffice.pdf",
                description: language === 'de' ? "Remote-Arbeits-Strategien" : "Remote work strategies"
            },
            {
                id: "other-9",
                title: "Scrum",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Scrum.pdf",
                description: language === 'de' ? "Agile Methodik" : "Agile methodology"
            },
            {
                id: "other-10",
                title: "Strategisches Marketing",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Strategisches Marketing.pdf",
                description: language === 'de' ? "Marketing-Strategien" : "Marketing strategies"
            },
            {
                id: "other-11",
                title: "Teilnahmebescheinigung VHS",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Teilnahmebescheinigung _VHS.pdf",
                description: language === 'de' ? "Kursbestätigung" : "Course participation certificate"
            },
            {
                id: "other-12",
                title: "Verhandeln",
                category: language === 'de' ? "Sonstige" : "Other",
                pdfUrl: "./certificates/Unwichtig/Verhandeln.pdf",
                description: language === 'de' ? "Verhandlungstechniken" : "Negotiation techniques"
            }
        ]
    }
];