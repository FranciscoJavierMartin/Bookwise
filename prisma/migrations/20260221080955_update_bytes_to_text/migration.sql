-- AlterTable
ALTER TABLE "BookChapter" ALTER COLUMN "chapterSummary" DROP NOT NULL,
ALTER COLUMN "chapterSummary" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "BookSummary" ALTER COLUMN "fullSummary" SET DATA TYPE TEXT;
